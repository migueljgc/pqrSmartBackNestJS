import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { Role } from '../enums/role.enum';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from '../constant/jwt.constants';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    // Si no hay roles requeridos, dejamos pasar
    if (!requiredRoles) return true;

    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('No se encontró el token');
    }

    const [, token] = authHeader.split(' ');

    try {
      // Verificar el token
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwtConstants.secret,
      });

      // Guardamos el usuario decodificado en el request (por si otros métodos lo usan)
      request.user = payload;

      console.log('✅ Payload decodificado:', payload);

      // Validar rol del token
      if (!requiredRoles.includes(payload.roles)) {
        throw new ForbiddenException('No tienes permiso para acceder');
      }

      return true;
    } catch (error) {
      console.error('❌ Error en RolesGuard:', error.message);
      throw new UnauthorizedException('Token inválido o expirado');
    }
  }
}
