/*
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *如果数据库字段发生变化，请在代码生器重新生成此Model
 */
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VOL.Entity.SystemModels;

namespace VOL.Entity.DomainModels
{
    [Entity(TableCnName = "图片",TableName = "Picture")]
    public class Picture:BaseEntity
    {
        /// <summary>
       ///
       /// </summary>
       [Key]
       [Display(Name ="Id")]
       [Column(TypeName="int")]
       [Required(AllowEmptyStrings=false)]
       public int Id { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="PictureBinary")]
       [MaxLength(20000)]
       [Column(TypeName="varbinary(20000)")]
       public string PictureBinary { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="MimeType")]
       [MaxLength(80)]
       [Column(TypeName="nvarchar(80)")]
       [Required(AllowEmptyStrings=false)]
       public string MimeType { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="SeoFilename")]
       [MaxLength(600)]
       [Column(TypeName="nvarchar(600)")]
       public string SeoFilename { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="AltAttribute")]
       [MaxLength(20000)]
       [Column(TypeName="nvarchar(20000)")]
       public string AltAttribute { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="TitleAttribute")]
       [MaxLength(20000)]
       [Column(TypeName="nvarchar(20000)")]
       public string TitleAttribute { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="IsNew")]
       [Column(TypeName="bit")]
       [Required(AllowEmptyStrings=false)]
       public bool IsNew { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="CreateID")]
       [Column(TypeName="int")]
       public int? CreateID { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="Creator")]
       [MaxLength(510)]
       [Column(TypeName="nvarchar(510)")]
       public string Creator { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="CreateDate")]
       [Column(TypeName="datetime")]
       public DateTime? CreateDate { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="ModifyID")]
       [Column(TypeName="int")]
       public int? ModifyID { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="Modifier")]
       [MaxLength(510)]
       [Column(TypeName="nvarchar(510)")]
       public string Modifier { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="ModifyDate")]
       [Column(TypeName="datetime")]
       public DateTime? ModifyDate { get; set; }

       
    }
}