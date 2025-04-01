/**
 * Simple client for the Figma MCP server (HTTP mode)
 */

const FIGMA_MCP_PORT = 3333;
const FIGMA_MCP_BASE_URL = `http://localhost:${FIGMA_MCP_PORT}`;

/**
 * Fetch a Figma file
 */
export async function fetchFigmaFile(fileKey: string) {
  const response = await fetch(`${FIGMA_MCP_BASE_URL}/messages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      method: 'GET',
      path: `/v1/files/${fileKey}`
    })
  });

  if (!response.ok) throw new Error(`Error: ${response.status}`);
  return await response.json();
}

/**
 * Fetch images for Figma nodes
 */
export async function fetchFigmaImages(fileKey: string, nodeIds: string[]) {
  const response = await fetch(`${FIGMA_MCP_BASE_URL}/messages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      method: 'GET',
      path: `/v1/images/${fileKey}`,
      query: { ids: nodeIds.join(','), format: 'png' }
    })
  });

  if (!response.ok) throw new Error(`Error: ${response.status}`);
  return await response.json();
}

/**
 * Check if MCP server is available
 */
export async function isMcpAvailable() {
  try {
    const response = await fetch(`${FIGMA_MCP_BASE_URL}/health`);
    return response.ok;
  } catch (error) {
    return false;
  }
} 