import { useState } from "react";
import "./Accordian.css";

const faqs = [
  {
    question: "Do I have to allow the use of cookies?",
    answer:
      "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
  },
  {
    question: "How do I change my My Page password?",
    answer:
      "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
  },
  {
    question: "What is BankID?",
    answer:
      "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
  },
  {
    question: "Whose birth number can I use?",
    answer:
      "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
  },
  {
    question: "When do I recieve a password ordered by letter?",
    answer:
      "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan",
  },
];

function Accordian() {
  const [openIndices, setOpenIndices] = useState([]);
  const [isMultiOpenAllowed, setIsMultiOpenAllowed] = useState(false);

  const toggleAccordion = (index) => {
    if (isMultiOpenAllowed) {
      if (openIndices.includes(index)) {
        setOpenIndices(openIndices.filter((i) => i !== index));
      } else {
        setOpenIndices([...openIndices, index]);
      }
    } else {
      setOpenIndices(openIndices.includes(index) ? [] : [index]);
    }
  };

  return (
    <div className="accordian">
      {/* Checkbox to toggle multi-open mode */}
      <label>
        <input
          type="checkbox"
          checked={isMultiOpenAllowed}
          onChange={() => setIsMultiOpenAllowed(!isMultiOpenAllowed)}
        />
        Is multiple open accordion allowed?
      </label>

      {/* Accordion Items */}
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="question">
            <h3>{faq.question}</h3>
            <button
              onClick={() => toggleAccordion(index)}
              className="accordian-icon"
            >
              {openIndices.includes(index) ? "-" : "+"}
            </button>
          </div>
          <div
            className={openIndices.includes(index) ? "answer" : "answer hidden"}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordian;
