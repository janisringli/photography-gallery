import "./ImpressumView.css";

import Header from "../../components/Header/Header";
function ImpressumView() {
  return (
    <div className="about-wrapper">
      <Header title="Datenschutz" />
      <div className="datenschutz-content">
        <p>
          1. Erfassung von Daten Bei jedem Zugriff auf unsere Website werden
          automatisch Informationen durch unseren Hosting-Provider erfasst und
          in Logfiles gespeichert. Diese Daten umfassen unter anderem Ihre
          IP-Adresse, den Zeitpunkt des Zugriffs, den verwendeten Browser, das
          Betriebssystem und die besuchten Seiten. Diese Informationen dienen
          ausschließlich statistischen Zwecken und helfen uns, unsere Website zu
          verbessern. Eine Zuordnung zu Ihrer Person ist dabei nicht möglich.
        </p>
        <br />
        <p>
          2. Verwendung von Cookies Unsere Website verwendet Cookies, um
          bestimmte Funktionen bereitzustellen und das Benutzererlebnis zu
          verbessern. Cookies sind kleine Textdateien, die auf Ihrem Endgerät
          gespeichert werden. Sie können die Verwendung von Cookies in den
          Einstellungen Ihres Browsers deaktivieren, jedoch können dadurch
          einige Funktionen unserer Website möglicherweise eingeschränkt sein.
        </p>
        <br />
        <p>
          3. Kontaktformular Wenn Sie über unser Kontaktformular mit uns in
          Verbindung treten, werden die von Ihnen eingegebenen Daten (wie Name,
          E-Mail-Adresse, Telefonnummer) gespeichert, um Ihre Anfrage zu
          bearbeiten. Diese Daten werden nicht ohne Ihre Einwilligung
          weitergegeben.
        </p>
        <br />
        <p>
          4. Externe Links Unsere Website kann Links zu externen Websites
          enthalten, auf deren Inhalte wir keinen Einfluss haben. Für die
          Datenschutzpraktiken dieser Websites übernehmen wir keine
          Verantwortung.
        </p>
        <br />
        <p>
          5. Datensicherheit Wir setzen technische und organisatorische
          Maßnahmen ein, um Ihre Daten vor Verlust, Manipulation und
          unberechtigtem Zugriff zu schützen. Ihre Daten werden verschlüsselt
          übertragen und auf sicheren Servern gespeichert.
        </p>
        <br />
        <p>
          6. Ihre Rechte Sie haben das Recht, Auskunft über die bei uns
          gespeicherten personenbezogenen Daten zu erhalten und deren
          Berichtigung, Löschung oder Sperrung zu verlangen. Bitte kontaktieren
          Sie uns dazu über die angegebenen Kontaktdaten.
        </p>
        <br />
        <p>
          7. Bitte beachten Sie, dass sich Datenschutzbestimmungen ändern
          können. Es empfiehlt sich daher, regelmäßig über Änderungen informiert
          zu sein.
        </p>
        <br />
        Stand: 08.06.2023
        <br />
      </div>
    </div>
  );
}
export default ImpressumView;
