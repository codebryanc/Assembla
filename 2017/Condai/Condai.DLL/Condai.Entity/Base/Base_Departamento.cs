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
    
    public partial class Base_Departamento
    {
        public Base_Departamento()
        {
            this.Base_Municipio = new HashSet<Base_Municipio>();
        }
    
        public int depId { get; set; }
        public int paiId { get; set; }
        public string depNombre { get; set; }
        public string depDescripcion { get; set; }
        public string depCodigoDane { get; set; }
        public int usuIdCreo { get; set; }
        public System.DateTime usuFechaCreo { get; set; }
        public int usuIdActualizo { get; set; }
        public System.DateTime usuFechaActualizo { get; set; }
    
        public virtual Base_Pais Base_Pais { get; set; }
        public virtual ICollection<Base_Municipio> Base_Municipio { get; set; }
    }
}