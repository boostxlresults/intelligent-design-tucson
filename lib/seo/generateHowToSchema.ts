/**
 * HowTo Schema Generator
 * Creates structured data for step-by-step preparation guides
 * Perfect for "How to Prepare for [Service]" sections
 * 
 * Helps with rich snippets and AI search optimization
 */

export interface HowToStep {
  name: string;
  text: string;
  duration?: string; // ISO 8601 duration format (e.g., "PT15M" for 15 minutes)
  tools?: string[];
}

export interface HowToSchemaOptions {
  name: string;
  description: string;
  steps: HowToStep[];
  estimatedCost?: string;
  totalTime?: string; // ISO 8601 duration format
  canonicalUrl?: string;
}

/**
 * Converts minutes to ISO 8601 duration format
 * @example minutesToISO(15) => "PT15M"
 * @example minutesToISO(90) => "PT1H30M"
 */
function minutesToISO(minutes: number): string {
  if (minutes < 60) {
    return `PT${minutes}M`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return remainingMinutes > 0 ? `PT${hours}H${remainingMinutes}M` : `PT${hours}H`;
}

/**
 * Generates HowTo schema markup for preparation guides
 */
export function generateHowToSchema(options: HowToSchemaOptions) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": options.name,
    "description": options.description,
    "step": options.steps.map((step, index) => {
      const stepSchema: any = {
        "@type": "HowToStep",
        "position": index + 1,
        "name": step.name,
        "text": step.text
      };

      // Add duration if provided (convert "15 minutes" to ISO format)
      if (step.duration) {
        const minutes = parseInt(step.duration);
        if (!isNaN(minutes)) {
          stepSchema.itemListElement = [{
            "@type": "HowToDirection",
            "text": step.text,
            "duringMedia": {
              "@type": "VideoObject",
              "name": step.name,
              "duration": minutesToISO(minutes)
            }
          }];
        }
      }

      // Add tools/supplies if provided
      if (step.tools && step.tools.length > 0) {
        stepSchema.tool = step.tools.map(tool => ({
          "@type": "HowToTool",
          "name": tool
        }));
      }

      return stepSchema;
    })
  };

  // Add total time estimate if provided
  if (options.totalTime) {
    schema.totalTime = options.totalTime;
  }

  // Add estimated cost if provided
  if (options.estimatedCost) {
    schema.estimatedCost = {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": options.estimatedCost
    };
  }

  return schema;
}
