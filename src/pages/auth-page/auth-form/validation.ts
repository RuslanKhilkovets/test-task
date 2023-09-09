const REQUIRED_FIELD: string = "Обов'язково для заповнення"

export const emailValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        // Додайте власну логіку для валідації електронної пошти
        if (!value.match(/^\S+@\S+\.\S+$/)) return "Неправильний формат електронної пошти";
        return true;
    }
}

export const passwordValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        // Використовуємо регулярний вираз для перевірки наявності цифр і латинських букв
        if (!/^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/.test(value)) {
            return "Пароль має містити принаймні одну цифру та одну латинську літеру";
        }
        return true;
    }
}