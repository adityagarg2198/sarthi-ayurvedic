import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Mail, MapPinHouse, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section className="w-full h-full flex p-10 items-center flex-col gap-10 text-neutral-600">
      <h3 className="text-5xl text-center text-sarthi-green">
        CONTACT <span className="text-sarthi-text-secondary">US</span>
      </h3>
      <h2 className="text-4xl text-center mt-10">
        Need Ayurvedic consultation or have a question?
        <blockquote>We’re here to guide you.</blockquote>
      </h2>
      <section className="flex flex-col gap-5">
        <a
          target="_blank"
          href="https://wa.me/918481819393"
          className="text-4xl flex gap-5"
        >
          <MessageCircle size={40} className="text-green-500" />
          +91‑8481819393
        </a>
        <a
          target="_blank"
          href="https://wa.me/918481819393"
          className="text-4xl flex gap-5"
        >
          <Mail size={40} className="text-green-500" />
          sarthiayurvedichospital@gmail.com
        </a>
        <address className="text-4xl flex gap-5">
          <MapPinHouse size={40} className="text-green-500" />
          <section>
            <p>Opposite to K.N. School,</p>
            <p>Ghikara Road,</p>
            <p>Charkhi Dadri,</p>
            <p>Haryana 127306</p>
          </section>
        </address>
      </section>
      <h3 className="text-5xl text-center text-sarthi-green  w-full mt-10">
        Visiting <span className="text-sarthi-text-secondary">Hours</span>
      </h3>
      <section className="flex flex-col text-lg gap-5 w-full max-w-2xl mt-5">
        <section className="flex justify-between border-b-4 px-4 text-4xl">
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
      <section className="flex justify-between gap-40 mt-20">
        <section className="text-4xl flex-1 max-w-2xl">
          <h2 className="text-6xl text-center text-sarthi-green  w-full mt-10">
            Still <span className="text-sarthi-text-secondary">Confused ?</span>
          </h2>
          <p>Leave your message and we'll get back to you within 24 hours.</p>
        </section>
        <form className="flex-1 flex flex-col gap-5 items-center">
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
      <h2 className="text-5xl text-center text-sarthi-green w-full mt-10">
        Locate <span className="text-sarthi-text-secondary">Us</span>
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14011.870638271936!2d76.272767!3d28.600747!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39128552f8af05a7%3A0x2395de61ae5caafc!2sDr.sanjeet%20rana%20Ayurvedic%20panchkarma%20physician%20specialist%20M.D.Panchkarma!5e0!3m2!1sen!2sus!4v1762708605920!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Contact;
