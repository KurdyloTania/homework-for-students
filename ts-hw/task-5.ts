/*
    Типізація об’єкта з вкладеним об’єктом:
    Створи інтерфейс Person з ключами:
    name (string), age (number), address (об'єкт з city і street)
    та призначити його тип об'єкту person.
*/

interface Address {
    city: string;
    street: string;
}

interface Person {
    name: string;
    age: number;
    address: Address;
}

const person: Person = {
    name: "Alex",
    age: 25,
    address: {
        city: "Київ",
        street: "Хрещатик"
    }
};
