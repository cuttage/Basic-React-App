import { loadStripe } from '@stripe/stripe-js'

export default function Subscribe() {
  const handleClick = async (e) => {
    const stripe = await loadStripe(
      'pk_test_51LpRoBFt5BwA3UtbsIEqJb1zb11wMBZIrsOXpGjwPILQ4WzERdCqE5IBwKeJNf58xIOBOeTfsYMI6KOZGg7eRqUy00waSgU6CD'
    )
    await stripe.redirectToCheckout({
      lineItems: [
        {
          price: 'price_1LpSBmFt5BwA3UtbN2SSjEaM',
          quantity: 1,
        },
      ],
      mode: 'subscription',
      successUrl: 'http://localhost:3000',
      cancelUrl: 'http://localhost:3000/cancel',
      locale: 'en',
    })
  }
  return <button onClick={handleClick}>Get Course Access</button>
}
