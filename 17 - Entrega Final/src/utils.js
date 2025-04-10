import { db } from "./services/config.js"
import { collection, addDoc, getDoc, doc, updateDoc } from "firebase/firestore"

export const finallyPurchase = async (nombre, apellido, telefono, email, cart, total) => {
    const buyer = {
        nombre,
        apellido,
        telefono,
        email,
        cart,
        total
    };

    try {
        // Validar stock
        for (const prod of cart) {
            const prodRef = doc(db, "products", prod.id);
            const prodDoc = await getDoc(prodRef);

            const stockActual = prodDoc.data().stock;

            if (stockActual < prod.quantity) {
                return { success: false, error: `No hay suficiente stock de ${prod.title}` };
            }
        }

        // Actualizar stock
        for (const prod of cart) {
            const prodRef = doc(db, "products", prod.id);
            const prodDoc = await getDoc(prodRef);
            const stockActual = prodDoc.data().stock;

            await updateDoc(prodRef, {
                stock: stockActual - prod.quantity
            });
        }

        // Crear orden
        const orderRef = collection(db, "orders");
        const newOrder = await addDoc(orderRef, buyer);

        return { success: true, id: newOrder.id };

    } catch (error) {
        return { success: false, error: "Ocurrió un error inesperado: " + error.message };
    }
};
