import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsModule } from './students/students.module';
import { ClassroomModule } from './classroom/classroom.module';
import { StudentmappingModule } from './studentmapping/studentmapping.module';
import { PrefixsModule } from './prefixs/prefixs.module';
import { GendersModule } from './genders/genders.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'student_menagement',
      entities: ['dist/**/**/*.entity.{ts,js}'],
      synchronize: true,
    }),
    StudentsModule,
    ClassroomModule,
    StudentmappingModule,
    PrefixsModule,
    GendersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
