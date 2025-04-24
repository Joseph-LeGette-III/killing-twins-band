"use client";

import Image from "next/image";
import Script from "next/script";
import { useEffect, useState } from "react";

// Define the BIT type for the window object
declare global {
  interface Window {
    BIT?: {
      widgets: () => void;
    };
  }
}

export default function Events() {
  const [pageTitle, setPageTitle] = useState("Killing Twins - Events");
  const [isLoading, setIsLoading] = useState(true);

  // Set document title
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  // Load the Bandsintown widget script after component mounts
  useEffect(() => {
    // Create widget container if it doesn't exist
    if (!document.querySelector(".bit-widget-initializer")) {
      const widgetContainer = document.createElement("div");
      widgetContainer.id = "bandsintown-widget-container";
      document.getElementById("widget-container")?.appendChild(widgetContainer);
    }

    // Check if the widget script is already loaded to avoid duplicates
    const existingScript = document.querySelector(
      'script[src="https://widgetv3.bandsintown.com/main.min.js"]',
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://widgetv3.bandsintown.com/main.min.js";
      script.charset = "utf-8";
      script.async = true;
      script.onload = () => {
        initializeBandsintownWidget();
        // Add a little delay to ensure widget is fully rendered
        setTimeout(() => setIsLoading(false), 1000);
      };
      document.body.appendChild(script);
    } else {
      // If script already exists, just initialize the widget
      initializeBandsintownWidget();
      // Add a little delay to ensure widget is fully rendered
      setTimeout(() => setIsLoading(false), 1000);
    }

    return () => {
      // Clean up if needed
    };
  }, []);

  const initializeBandsintownWidget = () => {
    const widgetContainer = document.getElementById("widget-container");
    if (widgetContainer) {
      // Clear any existing widget
      widgetContainer.innerHTML = "";

      // Create the widget initializer element
      const widgetElement = document.createElement("a");
      widgetElement.className = "bit-widget-initializer";

      // Set all the data attributes
      widgetElement.setAttribute("data-artist-name", "id_15571875");
      widgetElement.setAttribute("data-events-to-display", "");
      widgetElement.setAttribute("data-background-color", "rgba(10,10,10,1)");
      widgetElement.setAttribute("data-separator-color", "rgba(221,221,221,1)");
      widgetElement.setAttribute("data-text-color", "rgba(255,255,255,1)");
      widgetElement.setAttribute("data-font", "Helvetica");
      widgetElement.setAttribute("data-auto-style", "true");
      widgetElement.setAttribute(
        "data-button-label-capitalization",
        "uppercase",
      );
      widgetElement.setAttribute("data-header-capitalization", "uppercase");
      widgetElement.setAttribute("data-location-capitalization", "uppercase");
      widgetElement.setAttribute("data-venue-capitalization", "uppercase");
      widgetElement.setAttribute("data-display-local-dates", "true");
      widgetElement.setAttribute("data-local-dates-position", "tab");
      widgetElement.setAttribute("data-display-past-dates", "false");
      widgetElement.setAttribute("data-display-details", "true");
      widgetElement.setAttribute("data-display-lineup", "true");
      widgetElement.setAttribute("data-display-start-time", "false");
      widgetElement.setAttribute("data-social-share-icon", "true");
      widgetElement.setAttribute("data-display-limit", "all");
      widgetElement.setAttribute("data-date-format", "MMM. D, YYYY");
      widgetElement.setAttribute("data-date-orientation", "horizontal");
      widgetElement.setAttribute("data-date-border-color", "#4A4A4A");
      widgetElement.setAttribute("data-date-border-width", "1px");
      widgetElement.setAttribute("data-date-capitalization", "capitalize");
      widgetElement.setAttribute("data-date-border-radius", "10px");
      widgetElement.setAttribute("data-event-ticket-cta-size", "medium");
      widgetElement.setAttribute("data-event-custom-ticket-text", "");
      widgetElement.setAttribute("data-event-ticket-text", "TICKETS");
      widgetElement.setAttribute("data-event-ticket-icon", "false");
      widgetElement.setAttribute(
        "data-event-ticket-cta-text-color",
        "rgba(255,255,255,1)",
      );
      widgetElement.setAttribute(
        "data-event-ticket-cta-bg-color",
        "rgba(74,74,74,1)",
      );
      widgetElement.setAttribute(
        "data-event-ticket-cta-border-color",
        "rgba(74,74,74,1)",
      );
      widgetElement.setAttribute("data-event-ticket-cta-border-width", "0px");
      widgetElement.setAttribute("data-event-ticket-cta-border-radius", "2px");
      widgetElement.setAttribute(
        "data-sold-out-button-text-color",
        "rgba(255,255,255,1)",
      );
      widgetElement.setAttribute(
        "data-sold-out-button-background-color",
        "rgba(74,74,74,1)",
      );
      widgetElement.setAttribute(
        "data-sold-out-button-border-color",
        "rgba(74,74,74,1)",
      );
      widgetElement.setAttribute("data-sold-out-button-clickable", "true");
      widgetElement.setAttribute("data-event-rsvp-position", "left");
      widgetElement.setAttribute("data-event-rsvp-cta-size", "medium");
      widgetElement.setAttribute("data-event-rsvp-only-show-icon", "false");
      widgetElement.setAttribute("data-event-rsvp-text", "RSVP");
      widgetElement.setAttribute("data-event-rsvp-icon", "false");
      widgetElement.setAttribute(
        "data-event-rsvp-cta-text-color",
        "rgba(255,255,255,1)",
      );
      widgetElement.setAttribute(
        "data-event-rsvp-cta-bg-color",
        "rgba(74,74,74,1)",
      );
      widgetElement.setAttribute(
        "data-event-rsvp-cta-border-color",
        "rgba(74,74,74,1)",
      );
      widgetElement.setAttribute("data-event-rsvp-cta-border-width", "1px");
      widgetElement.setAttribute("data-event-rsvp-cta-border-radius", "2px");
      widgetElement.setAttribute("data-follow-section-position", "top");
      widgetElement.setAttribute("data-follow-section-alignment", "center");
      widgetElement.setAttribute(
        "data-follow-section-header-text",
        "Get updates on new shows, new music, and more",
      );
      widgetElement.setAttribute("data-follow-section-cta-size", "medium");
      widgetElement.setAttribute("data-follow-section-cta-text", "FOLLOW");
      widgetElement.setAttribute("data-follow-section-cta-icon", "false");
      widgetElement.setAttribute(
        "data-follow-section-cta-text-color",
        "rgba(255,255,255,1)",
      );
      widgetElement.setAttribute(
        "data-follow-section-cta-bg-color",
        "rgba(74,74,74,1)",
      );
      widgetElement.setAttribute(
        "data-follow-section-cta-border-color",
        "rgba(74,74,74,1)",
      );
      widgetElement.setAttribute("data-follow-section-cta-border-width", "0px");
      widgetElement.setAttribute(
        "data-follow-section-cta-border-radius",
        "2px",
      );
      widgetElement.setAttribute("data-play-my-city-position", "bottom");
      widgetElement.setAttribute("data-play-my-city-alignment", "center");
      widgetElement.setAttribute(
        "data-play-my-city-header-text",
        "Don't see a show near you?",
      );
      widgetElement.setAttribute("data-play-my-city-cta-size", "medium");
      widgetElement.setAttribute(
        "data-play-my-city-cta-text",
        "REQUEST A SHOW",
      );
      widgetElement.setAttribute("data-play-my-city-cta-icon", "false");
      widgetElement.setAttribute(
        "data-play-my-city-cta-text-color",
        "rgba(255,255,255,1)",
      );
      widgetElement.setAttribute(
        "data-play-my-city-cta-bg-color",
        "rgba(74,74,74,1)",
      );
      widgetElement.setAttribute(
        "data-play-my-city-cta-border-color",
        "rgba(74,74,74,1)",
      );
      widgetElement.setAttribute("data-play-my-city-cta-border-width", "0px");
      widgetElement.setAttribute("data-play-my-city-cta-border-radius", "2px");
      widgetElement.setAttribute("data-optin-font", "");
      widgetElement.setAttribute("data-optin-text-color", "");
      widgetElement.setAttribute("data-optin-bg-color", "");
      widgetElement.setAttribute("data-optin-cta-text-color", "");
      widgetElement.setAttribute("data-optin-cta-bg-color", "");
      widgetElement.setAttribute("data-optin-cta-border-width", "");
      widgetElement.setAttribute("data-optin-cta-border-radius", "");
      widgetElement.setAttribute("data-optin-cta-border-color", "");
      widgetElement.setAttribute("data-language", "en");
      widgetElement.setAttribute("data-layout-breakpoint", "900");
      widgetElement.setAttribute("data-app-id", "");
      widgetElement.setAttribute("data-affil-code", "");
      widgetElement.setAttribute("data-bit-logo-position", "bottomRight");
      widgetElement.setAttribute("data-bit-logo-color", "rgba(255,255,255,1)");

      // Append the widget element to the container
      widgetContainer.appendChild(widgetElement);

      // If the Bandsintown widget initializer is available, trigger it to initialize the widget
      if (window.BIT && typeof window.BIT.widgets === "function") {
        window.BIT.widgets();
      }
    }
  };

  // Loading spinner component
  const Spinner = () => (
    <div className="flex h-64 w-full items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-gray-300"></div>
      <span className="ml-3 text-xl text-gray-300">Loading events...</span>
    </div>
  );

  return (
    <div className="container mx-auto w-5/6 pt-10 md:w-3/4 zfold:w-full">
      <div className="col-span-2 col-start-2 my-auto w-auto text-center text-5xl zfold:text-2xl">
        Upcoming Events
      </div>

      {/* Show loading spinner while widget is loading */}
      {isLoading && <Spinner />}

      {/* Container for the Bandsintown widget */}
      <div
        id="widget-container"
        className={`mt-8 transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
      ></div>

      {/* Script to load Bandsintown widget */}
      <Script
        src="https://widgetv3.bandsintown.com/main.min.js"
        strategy="afterInteractive"
        onReady={() => {
          console.log("Bandsintown script loaded");
          // The widget initialization is handled in useEffect
        }}
      />
    </div>
  );
}
