import { error } from '@sveltejs/kit';
import type { Actions } from './$types';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET
});

export const actions: Actions = {
    default: async ({ request }) => {
        try {
            const formData = await request.formData();
            const amount = formData.get('amount')?.toString() || '50000'; // Default 500 INR

            // Create Razorpay order
            const order = await razorpay.orders.create({
                amount: amount,
                currency: 'INR',
                receipt: `coffee_${Date.now()}`,
                notes: {
                    type: 'coffee'
                }
            });

            return {
                success: true,
                order: {
                    id: order.id,
                    amount: order.amount,
                    currency: order.currency
                }
            };
        } catch (err) {
            console.error('Razorpay error:', err);
            throw error(500, 'Failed to create payment order');
        }
    }
};