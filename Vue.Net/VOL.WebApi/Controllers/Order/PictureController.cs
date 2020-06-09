/*
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *如果要增加方法请在当前目录下Partial文件夹PictureController编写
 */
using Microsoft.AspNetCore.Mvc;
using VOL.Core.Controllers.Basic;
using VOL.Entity.AttributeManager;
using VOL.Order.IServices;
namespace VOL.Order.Controllers
{
    [Route("api/Picture")]
    [PermissionTable(Name = "Picture")]
    public partial class PictureController : ApiBaseController<IPictureService>
    {
        public PictureController(IPictureService service)
        : base(service)
        {
        }
    }
}

