//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Condai.Entity.Base
{
    using System;
    using System.Collections.Generic;
    
    public partial class Base_Cliente
    {
        public int cliId { get; set; }
        public string parIdTCL { get; set; }
        public string parValorTCL { get; set; }
        public string cliIdentificacion { get; set; }
        public string cliNombre { get; set; }
        public string cliDireccion { get; set; }
        public string cliTelefono { get; set; }
        public string cliCorreo { get; set; }
        public bool cliActivo { get; set; }
        public int usuIdCreo { get; set; }
        public System.DateTime usuFechaCreo { get; set; }
        public int usuIdActualizo { get; set; }
        public System.DateTime usuFechaActualizo { get; set; }
    
        public virtual Base_Parametro Base_Parametro { get; set; }
    }
}