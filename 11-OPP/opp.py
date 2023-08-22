class Person:
    def __init__(self,name, id, address):
        self.name = name
        self.id = id
        self.address = address


# class Student:
#     def __init__(self):


person1 = Person("Pablo Vasquez", "19015662-1", {
    "Street": "Guacolda",
    "Number": "20",
    "City": "Valparaiso"
    }    
)

print(person1.address)        