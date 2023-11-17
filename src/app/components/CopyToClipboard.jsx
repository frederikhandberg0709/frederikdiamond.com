import React from "react";

class CopyToClipboard extends React.Component {
  copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Text copied to clipboard:", text);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };

  render() {
    const textToCopy =
      "057b8b7fbaf04db052c1fc0ec264381f660378821119e92dcc1ee475299e43f26b!";

    return (
      <div>
        <button
          onClick={() => this.copyToClipboard(textToCopy)}
          className="font-semibold text-white transition-all hover:text-blue-500 hover:underline"
        >
          {textToCopy}
        </button>
      </div>
    );
  }
}

export default CopyToClipboard;
