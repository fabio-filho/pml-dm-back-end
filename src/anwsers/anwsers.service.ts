import { Injectable } from '@nestjs/common';


@Injectable()
export class AnwsersService {
  membersAnwsers = {}
  members = {
  '1': "Diego Juarez", 
  '2': "Pedro Diniz",
  '3': "Matheus Fumian",
  '4': "Marcus Martins",
  '5': "Stephanye Castellano",
  '6': "Vinicius Castro",
  '7': "Gustavo Silva",
  '8': "Raphael Carvalho",
  '9': "Willian Tavares",
  '10': "Vitor Ellwanger",
  '11': "Henrique Maltez",
  '12': "Larissa Oliveira",
  '13': "Matheus Morais",
  '14': "Levi Bastos",
  '15': "Aramys Matos",
  '16': "Fábio Filho",
  '17': "Intruso 1",
  '18': "Intruso 2",
  }

  create(anwserDto) {

    console.log(anwserDto)
    this.membersAnwsers[anwserDto.memberId] = anwserDto.anwser
  }

  clearAnwsers(){
    return this.membersAnwsers = {}
  }

  findAll() {
    return this.sortAwnsers()
  }

  findAllMembers(){
    return Object.keys(this.members)
    .map(membersId => ({id: membersId, name: this.members[membersId]}))
  }

  private sortAwnsers(){
   return Object.keys(this.membersAnwsers)
    .map(membersId => ({ 
      name:this.members[membersId] , 
      awnser: this.membersAnwsers[membersId] 
    }))
    .sort(this.alphabeticallySorter)
  }

  private alphabeticallySorter(a,b){
    var textA = a.awnser?.toUpperCase();
    var textB = b.awnser?.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  }

}
