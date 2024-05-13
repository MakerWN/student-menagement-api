export class CreateStudentDto {
    id: number;
    citizenID: string;
    prefix: number;
    firstName: string;
    lastName: string;
    gender: number;
    dateOfBirth: Date;
    grade: number;
    class: number;
    createAt: Date;
    updateAt: Date;
}
