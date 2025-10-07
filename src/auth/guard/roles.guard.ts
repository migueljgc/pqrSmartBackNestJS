import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { Role } from '../enums/role.enum';
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    console.log('🎯 RolesGuard ejecutándose...');

    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    console.log('Required roles:', requiredRoles);

    const request = context.switchToHttp().getRequest();
    console.log('Request user:', request.user);
    console.log('Request headers:', request.headers);
    console.log('Request completo:', Object.keys(request));

    if (!requiredRoles) {
      return true;
    }

    // Si no hay user, es porque AuthGuard no se ejecutó primero
    if (!request.user) {
      console.log(
        '❌ ERROR: User no encontrado. AuthGuard no se ejecutó antes.',
      );
      return false;
    }

    return requiredRoles.includes(request.user.role);
  }
}
