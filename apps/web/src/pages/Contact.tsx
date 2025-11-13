import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Mail, MapPinHouse, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section className="w-full h-full flex p-2 items-center flex-col gap-15 text-neutral-600">
      <h1 className="text-center text-sarthi-green mt-10">
        CONTACT <span className="text-sarthi-text-secondary">US</span>
      </h1>
      <h2 className="text-center">
        Need Ayurvedic consultation or have a question?
        <blockquote>We’re here to guide you.</blockquote>
      </h2>
      <section className="flex flex-col gap-3">
        <a
          target="_blank"
          href="https://wa.me/918481819393"
          className="flex gap-5 items-center"
        >
          <MessageCircle size={40} className="text-green-500" />
          +91‑8481819393
        </a>
        <a
          target="_blank"
          href="https://wa.me/918481819393"
          className="flex gap-5 items-center"
        >
          <Mail size={40} className="text-green-500" />
          sarthiayurvedichospital@gmail.com
        </a>
        <address className="flex gap-5 items-center">
          <MapPinHouse size={40} className="text-green-500" />
          <section>
            <p>Opposite to K.N. School,</p>
            <p>Ghikara Road,</p>
            <p>Charkhi Dadri,</p>
            <p>Haryana 127306</p>
          </section>
        </address>
      </section>
      <section className="flex flex-col gap-5 w-full max-w-2xl mt-5 px-2">
        <h2 className="text-center text-sarthi-green w-full">
          Visiting <span className="text-sarthi-text-secondary">Hours</span>
        </h2>
        <section className="flex justify-between border-b-4 px-4">
          <p>Day</p>
          <p>Timings</p>
        </section>
        <section className="flex justify-between">
          <p>Monday–Saturday</p>
          <p>9:00 AM – 6:00 PM</p>
        </section>
        <section className="flex justify-between">
          <p>Sunday (Optional Panchkarma)</p>
          <p>10:00 AM – 4:00 PM</p>
        </section>
      </section>
      <section className="flex w-full flex-wrap gap-10 justify-center">
        <section className="w-full max-w-2xl gap-2 flex flex-col">
          <h2 className="text-center text-sarthi-green w-full mt-10">
            Still <span className="text-sarthi-text-secondary">Confused ?</span>
          </h2>
          <p className="text-center">
            Leave your message and we'll get back to you within 24 hours.
          </p>
        </section>
        <form className="flex flex-col gap-5 items-center px-2 w-full max-w-lg">
          <Field>
            <FieldLabel>Name</FieldLabel>
            <Input type="text" />
          </Field>
          <Field>
            <FieldLabel>Email</FieldLabel>
            <Input type="email" />
          </Field>
          <Field>
            <FieldLabel>Query</FieldLabel>
            <Input type="text" />
          </Field>
          <Button
            className="bg-sarthi-green text-amber-50 cursor-pointer"
            type="submit"
            size={"lg"}
            title="submit"
          >
            Submit
          </Button>
        </form>
      </section>
      <h3 className="text-center text-sarthi-green">
        Locate <span className="text-sarthi-text-secondary">Us</span>
      </h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14011.870638271936!2d76.272767!3d28.600747!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39128552f8af05a7%3A0x2395de61ae5caafc!2sDr.sanjeet%20rana%20Ayurvedic%20panchkarma%20physician%20specialist%20M.D.Panchkarma!5e0!3m2!1sen!2sus!4v1762708605920!5m2!1sen!2sus"
        height="450"
        className="w-full max-w-96"
        style={{ border: 0 }}
        allowFullScreen={false}
        title="Map"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Contact;
