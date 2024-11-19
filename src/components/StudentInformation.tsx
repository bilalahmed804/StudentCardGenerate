'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type StudentProps = {
    name: string;
    age: number;
    rollNumber: string;
    className: string;
  };

  export default function StudentInformation() {
      const [name, setName] = useState('')
      const [age, setAge] = useState('')
      const [rollNumber, setRollNumber] = useState('')
      const [className, setClassName] = useState('')
      const [submitted, setSubmitted] = useState(false)
      const [student , setStudents] = useState<StudentProps[]>([])
      
      const students: StudentProps[] = [
        { name: "Bilal Ahmed", age: 18, rollNumber: "A001", className: "12A" },
        { name: "Usman", age: 17, rollNumber: "B002", className: "11B" },
        { name: "Shahzad", age: 16, rollNumber: "C004", className: "10C" },
        { name: "ALi", age: 16, rollNumber: "C003", className: "10C" },
       
    ]
     
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
        const newStudent = {
          name,
          age: parseInt(age, 10),
          rollNumber,
          className,
        };
    
        setStudents((prevStudents) => [...prevStudents, newStudent]);
    
        console.log('Submitted:', { name, age, rollNumber, className })
      }
      
  return (
    <div className="p-4">
      <Card className="w-full max-w-md mx-auto my-5">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-blue-500">Student Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter student's name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                placeholder="Enter student's age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rollNumber">Roll Number</Label>
              <Input
                id="rollNumber"
                placeholder="Enter roll number"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="className">Class Name</Label>
              <Input
                id="className"
                placeholder="Enter class name"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-500">Submit</Button>
          </form>
        </CardContent>
        {submitted && (
          <CardFooter>
            <div className="w-full text-center text-green-600">
              Form submitted successfully!
            </div>
          </CardFooter>
        )}
      </Card>
            <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Student ID Cards
      </h1>
      <p className="text-center mb-8 text-gray-600">
        Enter your data to view your Student ID card. Your information will be displayed in a card format below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {student.map((student) => (
          <StudentCard
            key={student.rollNumber}
            name={student.name}
            age={student.age}
            rollNumber={student.rollNumber}
            className={student.className}
          />
        ))}
        {students.map((student) => (
          <StudentCard
            key={student.rollNumber}
            name={student.name}
            age={student.age}
            rollNumber={student.rollNumber}
            className={student.className}
          />
        ))}
      </div>
    </div>

    
    </div>
  )
}

            function StudentCard({ name, age, rollNumber, className }: StudentProps) {
                return (
                  <Card className="w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
                    <CardHeader className="bg-blue-500 text-white p-4">
                      <CardTitle className="text-xl font-bold">{name}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="font-semibold">Age:</div>
                        <div>{age}</div>
                        <div className="font-semibold">Roll Number:</div>
                        <div>{rollNumber}</div>
                        <div className="font-semibold">Class:</div>
                        <div>{className}</div>
                      </div>
                    </CardContent>
                  </Card>
                );
              }