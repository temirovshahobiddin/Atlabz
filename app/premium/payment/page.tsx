"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/shared/store/authStore";
import Button from "@/shared/ui/Button";

const PaymentPage = () => {
  const router = useRouter();
  const { isAuthenticated, pendingPayment, setPendingPayment } = useAuthStore();
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!isAuthenticated) {
      router.push("/register?redirect=payment");
    }
  }, [isAuthenticated, router]);

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      // Clear pending payment after successful payment
      setPendingPayment(null);
      // Redirect to success page or dashboard
      router.push("/premium/problem-solve");
    }, 2000);
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-[20px]">Перенаправление на страницу входа...</p>
      </div>
    );
  }

  return (
    <div className="max-w-[600px] mx-auto py-10 px-4">
      <h1 className="text-[32px] sm:text-[48px] font-bold text-(--blue) mb-8">
        Оплата подписки
      </h1>

      {pendingPayment ? (
        <div className="bg-white rounded-[20px] p-6 shadow-lg">
          <h2 className="text-[24px] font-bold mb-4">Детали заказа</h2>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-[18px] text-gray-600">Тариф:</span>
              <span className="text-[18px] font-medium">{pendingPayment.tariff}</span>
            </div>
            
            {pendingPayment.addons.length > 0 && (
              <div className="border-b border-gray-200 pb-2">
                <span className="text-[18px] text-gray-600">Дополнительные опции:</span>
                <ul className="mt-2">
                  {pendingPayment.addons.map((addon, idx) => (
                    <li key={idx} className="text-[16px] ml-4">• {addon}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="flex justify-between pt-4">
              <span className="text-[24px] font-bold">Итого:</span>
              <span className="text-[32px] font-bold text-(--blue)">{pendingPayment.price}₽</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-[20px] font-bold">Способ оплаты</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <button className="border-2 border-(--blue) rounded-[10px] p-4 text-center hover:bg-(--blue)/5 transition">
                <span className="text-[16px] font-medium">Банковская карта</span>
              </button>
              <button className="border-2 border-gray-200 rounded-[10px] p-4 text-center hover:bg-gray-50 transition">
                <span className="text-[16px] font-medium">СБП</span>
              </button>
            </div>
          </div>

          <Button 
            variant={1} 
            className="w-full mt-8" 
            onClick={handlePayment}
            disabled={isProcessing}
          >
            {isProcessing ? "Обработка..." : "Оплатить"}
          </Button>
        </div>
      ) : (
        <div className="bg-white rounded-[20px] p-6 text-center">
          <p className="text-[18px] text-gray-600 mb-4">
            Нет данных для оплаты. Выберите тариф.
          </p>
          <Button variant={1} onClick={() => router.push("/#rates")}>
            Выбрать тариф
          </Button>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
