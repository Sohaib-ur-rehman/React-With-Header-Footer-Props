import React from "react";

export default function hero() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://mdbootstrap.com/img/new/slides/041.webp')",
          height: 400
        }}
      >
        <div className="mask">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Hero</h1>
              <h4 className="mb-3">Subheading</h4>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
