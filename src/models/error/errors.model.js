export class ErrorInvalidArgument extends Error {
  constructor(description) {
    super();
    this.tipo = "🌙 INVALID_ARGUMENT";
    this.description = description;
  }
}

export class ErrorNotFound extends Error {
  constructor(description) {
    super();
    this.tipo = "🌙 NOT_FOUND";
    this.description = description;
  }
}

export class ErrorAuthothentication extends Error {
  constructor(description = "Authentication Error") {
    super();
    this.tipo = "🌙 AUTHENTICATION_ERROR";
    this.description = description;
  }
}

export class ErrorPermissions extends Error {
  constructor(description = "Permissions Error") {
    super();
    this.tipo = "🌙 PERMISSIONS_ERROR";
    this.description = description;
  }
}

export class ErrorDuplicatedElement extends Error {
  constructor(description) {
    super();
    this.tipo = "🌙 ALREADY_EXIST";
    this.description = description;
  }
}

export class ErrorInvalidQuantity extends Error {
  constructor(description) {
    super();
    this.tipo = "🌙 INVALID_QUANTITY";
    this.description = description;
  }
}
