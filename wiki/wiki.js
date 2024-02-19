let currentLanguage = "en"; // Default language is English

function toggleLanguage() {
  const overviewText = document.getElementById("overview-text");
  const networkElementsText = document.getElementById("network-elements-text");
  const topologiesText = document.getElementById("topologies-text");
  const servicesText = document.getElementById("services-text");
  const protocolsText = document.getElementById("protocols-text");
  const referencesText = document.getElementById("references-text");
  const conclusionsText = document.getElementById("conclusions-text");
  const challengesText = document.getElementById("challenges-text");
  const flags = document.getElementById("language-toggle");

  if (currentLanguage === "en") {
    // Change to Spanish
    overviewText.textContent =
      "Introducción y resumen de la tarea de laboratorio.";
    networkElementsText.textContent =
      "Detalles sobre los elementos de la red involucrados en la tarea.";
    topologiesText.textContent =
      "Descripción de las topologías de red utilizadas en el laboratorio.";
    servicesText.textContent =
      "Explicación de los servicios utilizados en el laboratorio.";
    protocolsText.textContent =
      "Información sobre los protocolos empleados en el laboratorio.";
    referencesText.textContent =
      "Lista de fuentes y referencias utilizadas en la documentación.";
    conclusionsText.textContent =
      "Resumen de las conclusiones extraídas del trabajo de laboratorio.";
    challengesText.textContent =
      "Explicación de los desafíos encontrados durante el desarrollo de la solución.";
    flags.textContent = "🇺🇸";

    currentLanguage = "es";
  } else {
    // Change to English
    overviewText.textContent =
      "Introduction and summary of the lab assignment.";
    networkElementsText.textContent =
      "Details about the elements of the network involved in the assignment.";
    topologiesText.textContent =
      "Description of the network topologies used in the lab.";
    servicesText.textContent =
      "Explanation of the services utilized in the lab.";
    protocolsText.textContent =
      "Information about the protocols employed in the lab.";
    referencesText.textContent =
      "List of sources and references used in the documentation.";
    conclusionsText.textContent =
      "Summary of the conclusions drawn from the lab work.";
    challengesText.textContent =
      "Explanation of the challenges encountered during the development of the solution.";
    flags.textContent = "🇪🇸";

    currentLanguage = "en";
  }
}
