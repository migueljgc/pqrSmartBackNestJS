import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { RolesGuard } from '../guard/roles.guard';
import { AuthGuard } from '../guard/auth.guard';
import { Role } from '../enums/role.enum';
import { Roles } from './roles.decorator';

export function Auth(...roles: Role[]) {
  return applyDecorators(
    Roles(...roles), // ✅ define los roles
    UseGuards(AuthGuard, RolesGuard), // ✅ Auth primero
  );
}
