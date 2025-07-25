"use server";

import { render } from "@react-email/render";

/**
 * Convert React Email component into HTML string
 * @param {ReactElement} component - The email template React component
 * @returns {string} HTML markup
 */
export async function renderEmail(component) {
  return render(component);
}
