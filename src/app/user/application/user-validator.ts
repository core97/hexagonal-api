import { User } from '@user/domain/user.entity';

export default class UserValidator {
  validate(user: Partial<User['props']>) {
    if (user.email && !User.isValidEmail(user.email)) {
      throw new Error(`email is invalid`);
    }

    if (user.password && !User.isValidPassword(user.password)) {
      throw new Error(`password is invalid`);
    }
  }
}
