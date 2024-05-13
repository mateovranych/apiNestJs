import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}

   create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }
   findOneByEmail(email : string){
    return this.userRepository.findOneBy({email})
  }

  findByEmailWithPassword(email:string){
    return this.userRepository.findOne({
      where: {email},
      select:['id','username','email','password','role'],
    }                  
    );
  }
  
  async findAll() {
    return this.userRepository.find();
  }



 async  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
