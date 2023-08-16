import { ErrorPermissions } from '../models/error/errors.model.js';

export function soloRol(...roles) {
  return function (req, res, next) {
    const usrrole = req.session.user || req.session.passport.user;

    // Verificar si al menos uno de los roles del usuario coincide con los roles permitidos
    if (roles.some(role => usrrole.role.includes(role))) {
      return next();
    }

    return next(new ErrorPermissions(`Only available for roles: ${roles.join(", ")}`));
  };
}



