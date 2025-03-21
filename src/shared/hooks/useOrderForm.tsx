import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const OrderProductSchema = z.array(
    z.object({
        sellerId: z.string(),
        productId: z.string(),
        variant_id: z.string(),
        amount: z.string(),
        qty: z.string()
    })
)

const OrderAddressSchema = z.array(
    z.object({
        types: z.string(),
        province: z.string(),
        regency: z.string(),
        city: z.string(),
        district: z.string(),
        postalCode: z.string(),
        street: z.string(),
        number: z.string(),
        notes: z.string()
    })
)

const OrderShippingSchema = z.object({
    courierName: z.string(),
    courierService: z.string(),
    waybill: z.string(),
    shippingUnit: z.string(),
    shippingUnitValue: z.string(),
    amount: z.number(),
    insurance: z.boolean(),
    insurancePrice: z.number(),
    orderAddress: OrderAddressSchema

})

const OrderSchema = z.object({
    platformFee: z.number(),
    voucherId: z.number(),
    paymentMethod: z.string(),
    totalPrice: z.number(),
    orderProduct: OrderProductSchema,
    orderShipping: OrderShippingSchema
})

export type FormValues = z.infer<typeof OrderSchema>;

export function useOrderForm() {
    return useForm<FormValues>({
        resolver: zodResolver(OrderSchema),
        defaultValues: {
            platformFee: 0,
            voucherId: 0,
            paymentMethod: "",
            totalPrice: 0,
            orderProduct: [],
            orderShipping:{
                courierName: "",
                courierService: "",
                waybill: "",
                shippingUnit: "",
                shippingUnitValue: "",
                amount: 0,
                insurance: false,
                insurancePrice: 0,
                orderAddress: []
            }
        }
    })
}