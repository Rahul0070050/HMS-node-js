export interface Address {
    name: String,
    houseName: String,
    city: String,
    State: String
    pin: Number,
}
interface Experience {
    year: Number,
    text: String
}
export interface Staff {
    username: String,
    age: Number,
    address: Address[]
    emailId: String,
    phone: Number,
    JoindDate: String,
    department: String,
    salary: Number,
    position: String,
    appointed: Date
    password: String
}

export interface Doctor extends Staff{
    specializedIn: String,
    EducationQualification: String[],
    Languages: String[],
    workExperience: Experience[]
}