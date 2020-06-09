/*
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *如果要增加方法请在当前目录下Partial文件夹Product_Picture_MappingController编写
 */
using Microsoft.AspNetCore.Mvc;
using VOL.Core.Controllers.Basic;
using VOL.Entity.AttributeManager;
using VOL.Order.IServices;
namespace VOL.Order.Controllers
{
    [Route("api/Product_Picture_Mapping")]
    [PermissionTable(Name = "Product_Picture_Mapping")]
    public partial class Product_Picture_MappingController : ApiBaseController<IProduct_Picture_MappingService>
    {
        public Product_Picture_MappingController(IProduct_Picture_MappingService service)
        : base(service)
        {
        }
    }
}

