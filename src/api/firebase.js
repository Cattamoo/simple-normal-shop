import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
	onAuthStateChanged
} from "firebase/auth";
import {
	getDatabase,
	ref,
	set,
	get,
	remove
} from "firebase/database";


const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const auth = getAuth();
const provider = new GoogleAuthProvider();

export function login() {
	signInWithPopup(auth, provider)
		.catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			const email = error.customData.email;
			const credential = GoogleAuthProvider.credentialFromError(error);
			console.warn(`[${errorCode}] ${errorMessage} \n\n ${email} / ${credential}`);
		});
}

export function logout() {
	signOut(auth).catch(console.error);
}

export function onUserStateChange(callback) {
	onAuthStateChanged(auth, async (user) => {
		const updatedUser = user ? await adminUser(user) : null;
		callback(updatedUser);
	})
}

async function adminUser(user) {
	return readDB('admins')
		.then((data) => {
			if(data) {
				const isAdmin = data.includes(user.uid);
				return { ...user, isAdmin }
			}
			return user;
		}
	);
}

export async function addNewProduct(product) {
	return writeDB(
		`products/${product.id}`,
		{
			...product,
			price: parseInt(product.price)
		})
}

export async function getProducts() {
	return readDB('products')
		.then(data => data ? Object.values(data) : [])
	;
}

export async function addCart(uid, product) {
	return writeDB(
		`cart/${uid}/${product.id}_${product.option}`,
		product
	)
}

export async function getCartProducts(uid) {
	return readDB(`cart/${uid}`)
		.then(data => data ? Object.values(data) : [])
}

export async function setCartProductCount(uid, pid, value) {
	return writeDB(
		`cart/${uid}/${pid}/quantity`,
		value
	)
}

export async function removeCartProduct(uid, pid) {
	return removeDB(
		`cart/${uid}/${pid}`
	)
}


async function readDB(path) {
	return get(ref(database, path))
		.then((snapshot) => {
			return snapshot.val();
		})
		.catch(console.error)
	;
}
async function writeDB(path, data) {
	return set(ref(database, path), data)
		.catch(console.error)
	;
}
async function removeDB(path) {
	return remove(ref(database, path))
		.catch(console.error)
	;
}