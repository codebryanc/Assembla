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
    
    public partial class Base_Municipio
    {
        public int munId { get; set; }
        public int depId { get; set; }
        public string munNombre { get; set; }
        public string munDescripcion { get; set; }
        public string munCodigoDane { get; set; }
        public int usuIdCreo { get; set; }
        public System.DateTime usuFechaCreo { get; set; }
        public int usuIdActualizo { get; set; }
        public System.DateTime usuFechaActualizo { get; set; }
    
        public virtual Base_Departamento Base_Departamento { get; set; }
    }
}
