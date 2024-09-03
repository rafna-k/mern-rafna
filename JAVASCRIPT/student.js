class Student{
    setStudent(id,name,age,course){
        this.id=id
        this.name=name
        this.age=age
        this.course=course
        console.log(`student created`)
    }
    printStudent(){
        console.log(`id=${this.id},name=${this.name},age=${this.age},course=${this.course}`)
    }
}
    const student=new Student
    student.setStudent(100,"rafna",21,"bca")
    student.printStudent()
