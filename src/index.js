const fs = require("fs/promises");
const fileName = "myfile.txt";

const updateFile = async (fileName, fileContent) => {
  try {
    // Read the existing content of the file
    const existingContent = await fs.readFile(fileName, "utf-8");

    // Concatenate the existing content with the new content
    const updatedContent = `${existingContent.trim()}, ${fileContent}`;

    // Write the updated content back to the file
    await fs.writeFile(fileName, updatedContent);

    return updatedContent;
  } catch (error) {
    throw new Error(`Error updating file: ${error.message}`);
  }
};

module.exports = updateFile;
