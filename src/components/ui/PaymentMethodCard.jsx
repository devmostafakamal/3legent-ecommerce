import AmericanCard from "../../assets/icons/american_card.png";
import ApplePay from "../../assets/icons/applePay_card.png";
import MasterCard from "../../assets/icons/master_card.png";
import PaypalCard from "../../assets/icons/paypal_card.png";
import StripeCard from "../../assets/icons/stripe_card.png";
import VisaCard from "../../assets/icons/visa_card.png";
export default function PaymentMethodCard() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <img src={VisaCard} alt="visa card" className="h-8 w-12" />

      <img
        src={AmericanCard}
        alt="american payment card"
        className="h-8 w-12"
      />
      <img src={MasterCard} alt="master card" className="h-8 w-12" />
      <img src={StripeCard} alt="stripe card" className="h-8 w-12" />
      <img src={PaypalCard} alt="paypal card" className="h-8 w-12" />
      <img src={ApplePay} alt="apple pay card" className="h-8 w-12" />
    </div>
  );
}
