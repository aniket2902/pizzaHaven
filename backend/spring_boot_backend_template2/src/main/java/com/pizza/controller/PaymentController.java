package com.pizza.controller;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.razorpay.Utils;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @Value("${rzp_key_id}")
    private String keyId;

    @Value("${rzp_key_secret}")
    private String secret;

    @GetMapping("/{amount}")
    public String createPayment(@PathVariable Double amount) {
        try {
//            int amountInPaise = Integer.parseInt(amount) * 100;
            int amountInPaise = (int) Math.round(amount * 100);

            RazorpayClient razorpayClient = new RazorpayClient(keyId, secret);

            JSONObject orderRequest = new JSONObject();
            orderRequest.put("amount", amountInPaise);
            orderRequest.put("currency", "INR");
            orderRequest.put("receipt", "order_receipt_11");

            Order order = razorpayClient.orders.create(orderRequest);
            return order.toString();

        } catch (RazorpayException e) {
            return "{\"error\": \"RazorpayException: " + e.getMessage() + "\"}";
        } catch (Exception e) {
            return "{\"error\": \"Exception: " + e.getMessage() + "\"}";
        }
    }

    @PostMapping("/verify")
    public String verifyPayment(@RequestBody Map<String, String> payload) {
        try {
            String razorpayOrderId = payload.get("razorpay_order_id");
            String razorpayPaymentId = payload.get("razorpay_payment_id");
            String razorpaySignature = payload.get("razorpay_signature");

            JSONObject options = new JSONObject();
            options.put("razorpay_order_id", razorpayOrderId);
            options.put("razorpay_payment_id", razorpayPaymentId);
            options.put("razorpay_signature", razorpaySignature);

            boolean isValid = Utils.verifyPaymentSignature(options, secret);

            if (isValid) {
                return "{\"status\": \"Payment verified successfully.\"}";
            } else {
                return "{\"status\": \"Payment verification failed.\"}";
            }
        } catch (Exception e) {
            return "{\"error\": \"Exception: " + e.getMessage() + "\"}";
        }
    }
}
