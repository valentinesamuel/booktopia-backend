export interface IUser {
	created_at: Date
	updated_at: Date
	first_name: string
	last_name: string
	email: string
	password: string
	wishlisted_books: IWishlistedBooks
	order_history: IOrderHistory
	cart: ICart // the id of the cart and an array of cart items
	shipping_address: IShippingAddress
	billing_address: IBillingAddress
	subscribed_to_newsletter: boolean
}

export interface IBook {
	created_at: Date
	updated_at: Date
	quantity_available: number
	book_id: string
	authors: string[]
	title: string
	price: number
	discounted_price: number
	average_rating: number
	author_biography: string
	book_summary: string
	book_details: {
		cover_type: string
		ISBN: string
		publisher: string
	}
	cover_image: string
	genre: IGenre[]
	reviews: IReviews
}

export interface IGenre {
	genre_id: string
	genre_name: string
}

export interface IReviews {
	created_at: Date
	updated_at: Date
	book_id: string
	review_items: IReview[]
}

export interface IReview {
	created_at: Date
	updated_at: Date
	review_id: string
	author: string
	image: string
	rating: number
	body: string
}

export interface IShippingAddress {
	user_id: string
	street: string
	state: string
	zip_code: number | string
	country: string
	phone_number: number
}

export interface IBillingAddress {
	first_name: string
	last_name: string
	city: string
	state: string
	zip_code: number | string
	country: string
	phone_number: number
}

export interface ICheckout {
	created_at: Date
	updated_at: Date
	checkout_id: string
	user_id: string
	cart_items: unknown[]
	sub_total: number
	shipping_estimate: number
	tax_estimate: number
	grand_total: number
	shipping_address: IShippingAddress
}

export interface IOrder {
	created_at: Date
	updated_at: Date
	order_id: string
	user: IUser
	price: number
	order_items: unknown[]
	order_status: 'created' | 'processing' | 'shipped' | 'delivered'
	shipping_information: string
	delivery_Address: IShippingAddress
	tracking_number: string
}

export interface ICart {
	created_at: Date
	updated_at: Date
	user_id: string
	cart_id: string
	cart_items: unknown[]
	sub_total: number
	shipping_estimate: number
	tax_estimate: number
	cart_total: number
}

export interface IWishlistedBooks {
	created_at: Date
	updated_at: Date
	user_id: string
	books: IBook[]
}

export interface IOrderHistory {
	created_at: Date
	updated_at: Date
	user_id: string
	orders: IOrder[]
}

export interface IDonation {
	created_at: Date
	updated_at: Date
	donation_id: string
	user_id: string
	physical_condition: string
	genre: IGenre // the genre id
	reason_for_donation: string
	message: string
	title: string
	authors: string[]
}

export interface ISubscription {
	created_at: string
	updated_at: string
	subscription_id: string
	subscription_package: string
	duration: string
	fiction_genre: IGenre[] // list of fiction genre ids
	non_fiction_genre: IGenre[] // list of different non_fiction genre ids
	children_books: IGenre[] // list of different children genre ids
	message: string
	books_delivered: number
	total_books: number
	books_remaining: number
}

export interface IGiftCard {
	created_at: Date
	updated_at: Date
	gift_card_id: string
	amount: number
	sender: string
	recipient: string
	phone_number: number
	pin: number
}
