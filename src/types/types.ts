export interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    username: string,
    birthDate: string,
    image: string,
    height: number,
    weight: number,
    bloodGroup: string,
    address: {
        city: string,
        country: string
    }
}