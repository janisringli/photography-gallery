import "./DatenschutzView.css";
import Header from "../../components/Header/Header";

function DatenschutzView() {
  return (
    <div className="about-wrapper">
      <Header title="Datenschutz" />
      <div className="datenschutz-content">
        <p>Angaben gemäß § 5 TMG:</p>
        <br />
        <p>
          Max Mustermann <br />
          Musterstraße 123 <br />
          12345 Musterstadt
        </p>
        <br />
        <p>Kontakt:</p>
        <br />
        <p>
          Telefon: 01234-567890
          <br />
          E-Mail: info@musterfirma.de
        </p>
        <br />
        <p>Vertreten durch:</p>
        <br />
        <p>Max Mustermann</p>
        <br />
        Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
        <br />
        <p>
          Max Mustermann <br />
          Musterstraße 123 <br />
          12345 Musterstadt
        </p>
        <br />
      </div>
    </div>
  );
}
export default DatenschutzView;
