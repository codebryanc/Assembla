﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Condai.DAL.Modelo
{
    using Condai.Entity;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using Condai.Entity.Seguridad;
    
    public partial class CondaiSeguridad : DbContext
    {
        public CondaiSeguridad()
            : base("name=CondaiSeguridad")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Seguridad_Rol> Seguridad_Rol { get; set; }
        public virtual DbSet<Seguridad_RolesPorUsuario> Seguridad_RolesPorUsuario { get; set; }
        public virtual DbSet<Seguridad_Usuario> Seguridad_Usuario { get; set; }
    }
}