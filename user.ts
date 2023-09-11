import * as bcrypt from 'bcrypt';

export class User {
    constructor(
        public name: string,
        public email: string,
        private password: string, // Password é privado para armazenamento seguro
        public id?: string
    ) {}

    // Método para definir a senha do usuário (deve ser chamado antes de salvar o usuário)
    setPassword(password: string): void {
        const saltRounds = 10; // Número de rounds de hashing (quanto maior, mais seguro, mas mais lento)
        const salt = bcrypt.genSaltSync(saltRounds);
        this.password = bcrypt.hashSync(password, salt);
    }

    // Método para verificar a senha do usuário
    checkPassword(password: string): boolean {
        return bcrypt.compareSync(password, this.password);
    }
}
