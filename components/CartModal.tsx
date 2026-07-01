import React from 'react';
import Link from 'next/link'; 

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: any[];
  onRemove: (index: number) => void; 
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, cartItems, onRemove }) => {
  if (!isOpen) return null;

  // দাম থেকে '$' চিহ্ন সরিয়ে ক্যালকুলেশন করার জন্য আপডেট করা লজিক
  const totalPrice = cartItems.reduce((sum, item) => {
    const priceValue = typeof item.price === 'string' 
      ? parseFloat(item.price.replace('$', '')) 
      : item.price;
    return sum + (isNaN(priceValue) ? 0 : priceValue);
  }, 0);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-xl">
        <h2 className="text-xl font-bold mb-4">Your Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="space-y-3">
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-500">{typeof item.price === 'number' ? `$${item.price}` : item.price}</p>
                </div>
                {/* রিমুভ বাটন */}
                <button 
                  onClick={() => onRemove(index)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
            {/* টোটাল প্রাইস */}
            <li className="flex justify-between pt-4 font-bold text-lg">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </li>
          </ul>
        )}
        <div className="mt-6 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">Close</button>
          {cartItems.length > 0 && (
             <Link href="/checkout" onClick={onClose}>
                <button className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600">Checkout</button>
             </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;