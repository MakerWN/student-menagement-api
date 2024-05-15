export class CreateStudentDto {
  id: number;
  studentNo: string;
  prefixCode: number;
  firstName: string;
  lastName: string;
  genderCode: number;
  dateOfBirth: Date;
  classCode: number;
  createAt: Date;
  updateAt: Date;
}
