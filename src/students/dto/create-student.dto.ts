export class CreateStudentDto {
    id: number;
    studentID: string;
    prefixCode: number;
    firstName: string;
    lastName: string;
    genderCode: number;
    dateOfBirth: Date;
    grade: number;
    class: number;
    createAt: Date;
    updateAt: Date;
}
