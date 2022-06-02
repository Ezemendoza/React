import productos from "./datos"

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve(productos)

        }, 2000)
    })
}

