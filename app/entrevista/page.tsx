// app/entrevista/page.tsx
"use client";
import React, { useState } from "react";
import Select, { components } from "react-select";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";
import type { GroupBase, DropdownIndicatorProps } from "react-select";

export default function Entrevista() {
  const opciones = [
    { value: "", label: "SELECCIONE UNA OPCIÓN" },
    { value: "cc", label: "CÉDULA DE CIUDADANÍA" },
    { value: "ti", label: "TARJETA DE IDENTIDAD" },
    { value: "ce", label: "CÉDULA DE EXTRANJERÍA" },
    { value: "nes", label: "NES (Número establecido por la secretaría)" },
    { value: "pasaporte", label: "PASAPORTE" },
    { value: "pep", label: "PERMISO ESPECIAL DE PERMANENCIA" },
    { value: "rc", label: "REGISTRO CIVIL" },
    { value: "visa", label: "VISA" },
  ];

  const [selectedOption, setSelectedOption] = useState<{ value: string; label: string } | null>(opciones[0]);

  const DropdownIndicator = (
    props: DropdownIndicatorProps<{ value: string; label: string }, boolean, GroupBase<{ value: string; label: string }>>
  ) => {
    return (
      components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
          {props.selectProps.menuIsOpen ? (
            <FaChevronUp className="text-gray-600" />
          ) : (
            <FaChevronDown className="text-gray-600" />
          )}
        </components.DropdownIndicator>
      )
    );
  };

  const handleReset = () => {
    setSelectedOption(opciones[0]);
  };

  return (
    <div className="flex flex-col items-center py-10 min-h-[85vh] bg-gray-100">
      {/* Logo */}
      <div className="mb-4">
        <Image
          src="/logo_cul_2015.png"
          alt="Logo CUL"
          width={235} 
          height={90}
          className="object-contain max-h-[80px]"
        />
      </div>

      {/* Título */}
      <div className="mb-6 text-center px-4">
        <p className="text-2xl md:text-4xl font-bold text-[#333333]">
          FORMULARIO DE ENTREVISTA
        </p>
      </div>

      {/* Formulario */}
      <div className="bg-white border border-gray-300 shadow-sm w-[90vw] md:w-[60vw] rounded">
        {/* Barra superior */}
        <div className="flex items-center border-b bg-[#EFEFEF] border-gray-300 h-[38px]">
          <span className="px-2 py-1 text-sm text-[#333333] border-r border-gray-300">
            ☰
          </span>
          <span className="ml-2 text-[#666666] text-xs font-bold">
            Buscar aspirante
          </span>
        </div>

        {/* Campos del formulario */}
        <form
          className="flex flex-col space-y-4 "
          onReset={handleReset}
        >
          {/* Tipo de identificación + número */}
          <div className="gap-4 px-6 py-4 m-0 flex flex-col items-center justify-center md:flex-row md:items-center md:space-x-0 w-full">
            <label
              htmlFor="tipoId"
              className="text-gray-700 text-sm font-medium mb-1 md:mb-0 md:w-[180px]"
            >
              Tipo de identificación
            </label>

            {/* React Select */}
            <div className="w-full max-w-[300px] text-sm">
              <Select
                id="tipoId"
                options={opciones}
                value={selectedOption}
                onChange={(option) => setSelectedOption(option as { value: string; label: string } | null)}
                className="text-sm text-gray-700 cursor-pointer"
                components={{ DropdownIndicator }}
                styles={{
                  control: (base, state) => ({
                    ...base,
                    borderColor: "#d1d5db",
                    minHeight: "38px",
                    boxShadow: state.isFocused ? "0 0 0 1px #3b82f6" : "none",
                    cursor: "pointer",
                  }),
                  menu: (base) => ({
                    ...base,
                    zIndex: 50,
                    cursor: "pointer",
                  }),
                  option: (base, state) => ({
                    ...base,
                    cursor: "pointer",
                    backgroundColor: state.isFocused ? "#f3f4f6" : "transparent",
                    color: "#111827",
                  }),
                }}
              />
            </div>

            <input
              type="text"
              placeholder="Número de identificación"
              className="text-gray-700 border border-gray-300 rounded px-3 py-2 w-full max-w-[300px] text-sm"
            />
          </div>

          {/* Botones */}
          <div className="bg-[#EFEFEF] border-t border-gray-300 flex flex-col md:flex-row justify-center items-center p-4 space-y-2 md:space-y-0 md:space-x-4">
            <button
              type="submit"
              className="cursor-pointer bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 text-sm rounded w-full md:w-auto"
            >
              Buscar
            </button>
            <button
              type="reset"
              className="cursor-pointer bg-red-500 hover:bg-red-600 text-white px-6 py-2 text-sm rounded w-full md:w-auto"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
