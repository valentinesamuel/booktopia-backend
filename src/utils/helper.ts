/* eslint-disable @typescript-eslint/restrict-plus-operands */
import mongoose from 'mongoose';

export async function calculateAverageRating(
	bookId: string,
	bookCollection: mongoose.Collection,
	reviewCollection: mongoose.Collection
) {
	const reviews = await reviewCollection.find({book_id: bookId}).toArray();
	let sum = 0;
	let count = 0;
	for (let i = 0; i < reviews.length; i++) {
		sum += reviews[i].rating;
		count++;
	}
	const avgRating = sum / count;
	await bookCollection.updateOne(
		{_id: bookId},
		{$set: {average_rating: avgRating}}
	);
	console.log(`Average Rating is ${avgRating}`);
}
