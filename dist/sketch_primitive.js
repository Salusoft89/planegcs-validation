return function check(value) {
  return (
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "point" &&
      typeof value.x === "number" &&
      Number.isFinite(value.x) &&
      typeof value.y === "number" &&
      Number.isFinite(value.y) &&
      typeof value.fixed === "boolean") ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "line" &&
      typeof value.p1_id === "string" &&
      typeof value.p2_id === "string") ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "circle" &&
      typeof value.c_id === "string" &&
      typeof value.radius === "number" &&
      Number.isFinite(value.radius)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      typeof value.start_id === "string" &&
      typeof value.end_id === "string" &&
      typeof value.start_angle === "number" &&
      Number.isFinite(value.start_angle) &&
      typeof value.end_angle === "number" &&
      Number.isFinite(value.end_angle) &&
      value.type === "arc" &&
      typeof value.c_id === "string" &&
      typeof value.radius === "number" &&
      Number.isFinite(value.radius)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "ellipse" &&
      typeof value.c_id === "string" &&
      typeof value.focus1_id === "string" &&
      typeof value.radmin === "number" &&
      Number.isFinite(value.radmin)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      typeof value.start_id === "string" &&
      typeof value.end_id === "string" &&
      typeof value.start_angle === "number" &&
      Number.isFinite(value.start_angle) &&
      typeof value.end_angle === "number" &&
      Number.isFinite(value.end_angle) &&
      value.type === "arc_of_ellipse" &&
      typeof value.c_id === "string" &&
      typeof value.focus1_id === "string" &&
      typeof value.radmin === "number" &&
      Number.isFinite(value.radmin)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "parabola" &&
      typeof value.vertex_id === "string" &&
      typeof value.focus1_id === "string") ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      typeof value.start_id === "string" &&
      typeof value.end_id === "string" &&
      typeof value.start_angle === "number" &&
      Number.isFinite(value.start_angle) &&
      typeof value.end_angle === "number" &&
      Number.isFinite(value.end_angle) &&
      value.type === "arc_of_parabola" &&
      typeof value.vertex_id === "string" &&
      typeof value.focus1_id === "string") ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "hyperbola" &&
      typeof value.c_id === "string" &&
      typeof value.focus1_id === "string" &&
      typeof value.radmin === "number" &&
      Number.isFinite(value.radmin)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      typeof value.start_id === "string" &&
      typeof value.end_id === "string" &&
      typeof value.start_angle === "number" &&
      Number.isFinite(value.start_angle) &&
      typeof value.end_angle === "number" &&
      Number.isFinite(value.end_angle) &&
      value.type === "arc_of_hyperbola" &&
      typeof value.c_id === "string" &&
      typeof value.focus1_id === "string" &&
      typeof value.radmin === "number" &&
      Number.isFinite(value.radmin)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "equal" &&
      ((typeof value.param1 === "object" &&
        value.param1 !== null &&
        !Array.isArray(value.param1) &&
        typeof value.param1.o_id === "string" &&
        (value.param1.prop === "x" ||
          value.param1.prop === "y" ||
          value.param1.prop === "radius" ||
          value.param1.prop === "start_angle" ||
          value.param1.prop === "end_angle" ||
          value.param1.prop === "radmin")) ||
        (typeof value.param1 === "number" && Number.isFinite(value.param1)) ||
        typeof value.param1 === "string") &&
      ((typeof value.param2 === "object" &&
        value.param2 !== null &&
        !Array.isArray(value.param2) &&
        typeof value.param2.o_id === "string" &&
        (value.param2.prop === "x" ||
          value.param2.prop === "y" ||
          value.param2.prop === "radius" ||
          value.param2.prop === "start_angle" ||
          value.param2.prop === "end_angle" ||
          value.param2.prop === "radmin")) ||
        (typeof value.param2 === "number" && Number.isFinite(value.param2)) ||
        typeof value.param2 === "string") &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.internalalignment !== undefined
        ? value.internalalignment === 0 || value.internalalignment === 1
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "proportional" &&
      ((typeof value.param1 === "object" &&
        value.param1 !== null &&
        !Array.isArray(value.param1) &&
        typeof value.param1.o_id === "string" &&
        (value.param1.prop === "x" ||
          value.param1.prop === "y" ||
          value.param1.prop === "radius" ||
          value.param1.prop === "start_angle" ||
          value.param1.prop === "end_angle" ||
          value.param1.prop === "radmin")) ||
        (typeof value.param1 === "number" && Number.isFinite(value.param1)) ||
        typeof value.param1 === "string") &&
      ((typeof value.param2 === "object" &&
        value.param2 !== null &&
        !Array.isArray(value.param2) &&
        typeof value.param2.o_id === "string" &&
        (value.param2.prop === "x" ||
          value.param2.prop === "y" ||
          value.param2.prop === "radius" ||
          value.param2.prop === "start_angle" ||
          value.param2.prop === "end_angle" ||
          value.param2.prop === "radmin")) ||
        (typeof value.param2 === "number" && Number.isFinite(value.param2)) ||
        typeof value.param2 === "string") &&
      typeof value.ratio === "number" &&
      Number.isFinite(value.ratio) &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "difference" &&
      ((typeof value.param1 === "object" &&
        value.param1 !== null &&
        !Array.isArray(value.param1) &&
        typeof value.param1.o_id === "string" &&
        (value.param1.prop === "x" ||
          value.param1.prop === "y" ||
          value.param1.prop === "radius" ||
          value.param1.prop === "start_angle" ||
          value.param1.prop === "end_angle" ||
          value.param1.prop === "radmin")) ||
        (typeof value.param1 === "number" && Number.isFinite(value.param1)) ||
        typeof value.param1 === "string") &&
      ((typeof value.param2 === "object" &&
        value.param2 !== null &&
        !Array.isArray(value.param2) &&
        typeof value.param2.o_id === "string" &&
        (value.param2.prop === "x" ||
          value.param2.prop === "y" ||
          value.param2.prop === "radius" ||
          value.param2.prop === "start_angle" ||
          value.param2.prop === "end_angle" ||
          value.param2.prop === "radmin")) ||
        (typeof value.param2 === "number" && Number.isFinite(value.param2)) ||
        typeof value.param2 === "string") &&
      ((typeof value.difference === "object" &&
        value.difference !== null &&
        !Array.isArray(value.difference) &&
        typeof value.difference.o_id === "string" &&
        (value.difference.prop === "x" ||
          value.difference.prop === "y" ||
          value.difference.prop === "radius" ||
          value.difference.prop === "start_angle" ||
          value.difference.prop === "end_angle" ||
          value.difference.prop === "radmin")) ||
        (typeof value.difference === "number" &&
          Number.isFinite(value.difference)) ||
        typeof value.difference === "string") &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "p2p_distance" &&
      typeof value.p1_id === "string" &&
      typeof value.p2_id === "string" &&
      ((typeof value.distance === "object" &&
        value.distance !== null &&
        !Array.isArray(value.distance) &&
        typeof value.distance.o_id === "string" &&
        (value.distance.prop === "x" ||
          value.distance.prop === "y" ||
          value.distance.prop === "radius" ||
          value.distance.prop === "start_angle" ||
          value.distance.prop === "end_angle" ||
          value.distance.prop === "radmin")) ||
        (typeof value.distance === "number" &&
          Number.isFinite(value.distance)) ||
        typeof value.distance === "string") &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "p2p_angle_incr_angle" &&
      typeof value.p1_id === "string" &&
      typeof value.p2_id === "string" &&
      ((typeof value.angle === "object" &&
        value.angle !== null &&
        !Array.isArray(value.angle) &&
        typeof value.angle.o_id === "string" &&
        (value.angle.prop === "x" ||
          value.angle.prop === "y" ||
          value.angle.prop === "radius" ||
          value.angle.prop === "start_angle" ||
          value.angle.prop === "end_angle" ||
          value.angle.prop === "radmin")) ||
        (typeof value.angle === "number" && Number.isFinite(value.angle)) ||
        typeof value.angle === "string") &&
      typeof value.incrAngle === "number" &&
      Number.isFinite(value.incrAngle) &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "p2p_angle" &&
      typeof value.p1_id === "string" &&
      typeof value.p2_id === "string" &&
      ((typeof value.angle === "object" &&
        value.angle !== null &&
        !Array.isArray(value.angle) &&
        typeof value.angle.o_id === "string" &&
        (value.angle.prop === "x" ||
          value.angle.prop === "y" ||
          value.angle.prop === "radius" ||
          value.angle.prop === "start_angle" ||
          value.angle.prop === "end_angle" ||
          value.angle.prop === "radmin")) ||
        (typeof value.angle === "number" && Number.isFinite(value.angle)) ||
        typeof value.angle === "string") &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "p2l_distance" &&
      typeof value.p_id === "string" &&
      typeof value.l_id === "string" &&
      ((typeof value.distance === "object" &&
        value.distance !== null &&
        !Array.isArray(value.distance) &&
        typeof value.distance.o_id === "string" &&
        (value.distance.prop === "x" ||
          value.distance.prop === "y" ||
          value.distance.prop === "radius" ||
          value.distance.prop === "start_angle" ||
          value.distance.prop === "end_angle" ||
          value.distance.prop === "radmin")) ||
        (typeof value.distance === "number" &&
          Number.isFinite(value.distance)) ||
        typeof value.distance === "string") &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "point_on_line_pl" &&
      typeof value.p_id === "string" &&
      typeof value.l_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "point_on_line_ppp" &&
      typeof value.p_id === "string" &&
      typeof value.lp1_id === "string" &&
      typeof value.lp2_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "point_on_perp_bisector_pl" &&
      typeof value.p_id === "string" &&
      typeof value.l_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "point_on_perp_bisector_ppp" &&
      typeof value.p_id === "string" &&
      typeof value.lp1_id === "string" &&
      typeof value.lp2_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "parallel" &&
      typeof value.l1_id === "string" &&
      typeof value.l2_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "perpendicular_ll" &&
      typeof value.l1_id === "string" &&
      typeof value.l2_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "perpendicular_pppp" &&
      typeof value.l1p1_id === "string" &&
      typeof value.l1p2_id === "string" &&
      typeof value.l2p1_id === "string" &&
      typeof value.l2p2_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "l2l_angle_ll" &&
      typeof value.l1_id === "string" &&
      typeof value.l2_id === "string" &&
      ((typeof value.angle === "object" &&
        value.angle !== null &&
        !Array.isArray(value.angle) &&
        typeof value.angle.o_id === "string" &&
        (value.angle.prop === "x" ||
          value.angle.prop === "y" ||
          value.angle.prop === "radius" ||
          value.angle.prop === "start_angle" ||
          value.angle.prop === "end_angle" ||
          value.angle.prop === "radmin")) ||
        (typeof value.angle === "number" && Number.isFinite(value.angle)) ||
        typeof value.angle === "string") &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "l2l_angle_pppp" &&
      typeof value.l1p1_id === "string" &&
      typeof value.l1p2_id === "string" &&
      typeof value.l2p1_id === "string" &&
      typeof value.l2p2_id === "string" &&
      ((typeof value.angle === "object" &&
        value.angle !== null &&
        !Array.isArray(value.angle) &&
        typeof value.angle.o_id === "string" &&
        (value.angle.prop === "x" ||
          value.angle.prop === "y" ||
          value.angle.prop === "radius" ||
          value.angle.prop === "start_angle" ||
          value.angle.prop === "end_angle" ||
          value.angle.prop === "radmin")) ||
        (typeof value.angle === "number" && Number.isFinite(value.angle)) ||
        typeof value.angle === "string") &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "angle_via_point" &&
      typeof value.crv1_id === "string" &&
      typeof value.crv2_id === "string" &&
      typeof value.p_id === "string" &&
      ((typeof value.angle === "object" &&
        value.angle !== null &&
        !Array.isArray(value.angle) &&
        typeof value.angle.o_id === "string" &&
        (value.angle.prop === "x" ||
          value.angle.prop === "y" ||
          value.angle.prop === "radius" ||
          value.angle.prop === "start_angle" ||
          value.angle.prop === "end_angle" ||
          value.angle.prop === "radmin")) ||
        (typeof value.angle === "number" && Number.isFinite(value.angle)) ||
        typeof value.angle === "string") &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "midpoint_on_line_ll" &&
      typeof value.l1_id === "string" &&
      typeof value.l2_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "midpoint_on_line_pppp" &&
      typeof value.l1p1_id === "string" &&
      typeof value.l1p2_id === "string" &&
      typeof value.l2p1_id === "string" &&
      typeof value.l2p2_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "tangent_circumf" &&
      typeof value.p1_id === "string" &&
      typeof value.p2_id === "string" &&
      ((typeof value.rd1 === "object" &&
        value.rd1 !== null &&
        !Array.isArray(value.rd1) &&
        typeof value.rd1.o_id === "string" &&
        (value.rd1.prop === "x" ||
          value.rd1.prop === "y" ||
          value.rd1.prop === "radius" ||
          value.rd1.prop === "start_angle" ||
          value.rd1.prop === "end_angle" ||
          value.rd1.prop === "radmin")) ||
        (typeof value.rd1 === "number" && Number.isFinite(value.rd1)) ||
        typeof value.rd1 === "string") &&
      ((typeof value.rd2 === "object" &&
        value.rd2 !== null &&
        !Array.isArray(value.rd2) &&
        typeof value.rd2.o_id === "string" &&
        (value.rd2.prop === "x" ||
          value.rd2.prop === "y" ||
          value.rd2.prop === "radius" ||
          value.rd2.prop === "start_angle" ||
          value.rd2.prop === "end_angle" ||
          value.rd2.prop === "radmin")) ||
        (typeof value.rd2 === "number" && Number.isFinite(value.rd2)) ||
        typeof value.rd2 === "string") &&
      (value.internal !== undefined
        ? typeof value.internal === "boolean"
        : true) &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "tangent_at_bspline_knot" &&
      typeof value.b_id === "string" &&
      typeof value.l_id === "string" &&
      typeof value.knotindex === "number" &&
      Number.isFinite(value.knotindex) &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "p2p_coincident" &&
      typeof value.p1_id === "string" &&
      typeof value.p2_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "horizontal_l" &&
      typeof value.l_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "horizontal_pp" &&
      typeof value.p1_id === "string" &&
      typeof value.p2_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "vertical_l" &&
      typeof value.l_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "vertical_pp" &&
      typeof value.p1_id === "string" &&
      typeof value.p2_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "coordinate_x" &&
      typeof value.p_id === "string" &&
      ((typeof value.x === "object" &&
        value.x !== null &&
        !Array.isArray(value.x) &&
        typeof value.x.o_id === "string" &&
        (value.x.prop === "x" ||
          value.x.prop === "y" ||
          value.x.prop === "radius" ||
          value.x.prop === "start_angle" ||
          value.x.prop === "end_angle" ||
          value.x.prop === "radmin")) ||
        (typeof value.x === "number" && Number.isFinite(value.x)) ||
        typeof value.x === "string") &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "coordinate_y" &&
      typeof value.p_id === "string" &&
      ((typeof value.y === "object" &&
        value.y !== null &&
        !Array.isArray(value.y) &&
        typeof value.y.o_id === "string" &&
        (value.y.prop === "x" ||
          value.y.prop === "y" ||
          value.y.prop === "radius" ||
          value.y.prop === "start_angle" ||
          value.y.prop === "end_angle" ||
          value.y.prop === "radmin")) ||
        (typeof value.y === "number" && Number.isFinite(value.y)) ||
        typeof value.y === "string") &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "arc_rules" &&
      typeof value.a_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "point_on_circle" &&
      typeof value.p_id === "string" &&
      typeof value.c_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "point_on_ellipse" &&
      typeof value.p_id === "string" &&
      typeof value.e_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "point_on_hyperbolic_arc" &&
      typeof value.p_id === "string" &&
      typeof value.e_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "point_on_parabolic_arc" &&
      typeof value.p_id === "string" &&
      typeof value.e_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "point_on_bspline" &&
      typeof value.p_id === "string" &&
      typeof value.b_id === "string" &&
      ((typeof value.pointparam === "object" &&
        value.pointparam !== null &&
        !Array.isArray(value.pointparam) &&
        typeof value.pointparam.o_id === "string" &&
        (value.pointparam.prop === "x" ||
          value.pointparam.prop === "y" ||
          value.pointparam.prop === "radius" ||
          value.pointparam.prop === "start_angle" ||
          value.pointparam.prop === "end_angle" ||
          value.pointparam.prop === "radmin")) ||
        (typeof value.pointparam === "number" &&
          Number.isFinite(value.pointparam)) ||
        typeof value.pointparam === "string") &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "arc_of_ellipse_rules" &&
      typeof value.a_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "curve_value" &&
      typeof value.p_id === "string" &&
      typeof value.a_id === "string" &&
      ((typeof value.u === "object" &&
        value.u !== null &&
        !Array.isArray(value.u) &&
        typeof value.u.o_id === "string" &&
        (value.u.prop === "x" ||
          value.u.prop === "y" ||
          value.u.prop === "radius" ||
          value.u.prop === "start_angle" ||
          value.u.prop === "end_angle" ||
          value.u.prop === "radmin")) ||
        (typeof value.u === "number" && Number.isFinite(value.u)) ||
        typeof value.u === "string") &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "arc_of_hyperbola_rules" &&
      typeof value.a_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "arc_of_parabola_rules" &&
      typeof value.a_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "point_on_arc" &&
      typeof value.p_id === "string" &&
      typeof value.a_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "perpendicular_line2arc" &&
      typeof value.p1_id === "string" &&
      typeof value.p2_id === "string" &&
      typeof value.a_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "perpendicular_arc2line" &&
      typeof value.a_id === "string" &&
      typeof value.p1_id === "string" &&
      typeof value.p2_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "perpendicular_circle2arc" &&
      typeof value.center_id === "string" &&
      ((typeof value.radius === "object" &&
        value.radius !== null &&
        !Array.isArray(value.radius) &&
        typeof value.radius.o_id === "string" &&
        (value.radius.prop === "x" ||
          value.radius.prop === "y" ||
          value.radius.prop === "radius" ||
          value.radius.prop === "start_angle" ||
          value.radius.prop === "end_angle" ||
          value.radius.prop === "radmin")) ||
        (typeof value.radius === "number" && Number.isFinite(value.radius)) ||
        typeof value.radius === "string") &&
      typeof value.a_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "perpendicular_arc2circle" &&
      typeof value.a_id === "string" &&
      typeof value.center_id === "string" &&
      ((typeof value.radius === "object" &&
        value.radius !== null &&
        !Array.isArray(value.radius) &&
        typeof value.radius.o_id === "string" &&
        (value.radius.prop === "x" ||
          value.radius.prop === "y" ||
          value.radius.prop === "radius" ||
          value.radius.prop === "start_angle" ||
          value.radius.prop === "end_angle" ||
          value.radius.prop === "radmin")) ||
        (typeof value.radius === "number" && Number.isFinite(value.radius)) ||
        typeof value.radius === "string") &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "perpendicular_arc2arc" &&
      typeof value.a1_id === "string" &&
      typeof value.reverse1 === "boolean" &&
      typeof value.a2_id === "string" &&
      typeof value.reverse2 === "boolean" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "tangent_lc" &&
      typeof value.l_id === "string" &&
      typeof value.c_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "tangent_le" &&
      typeof value.l_id === "string" &&
      typeof value.e_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "tangent_la" &&
      typeof value.l_id === "string" &&
      typeof value.a_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "tangent_cc" &&
      typeof value.c1_id === "string" &&
      typeof value.c2_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "tangent_aa" &&
      typeof value.a1_id === "string" &&
      typeof value.a2_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "tangent_ca" &&
      typeof value.c_id === "string" &&
      typeof value.a_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "circle_radius" &&
      typeof value.c_id === "string" &&
      ((typeof value.radius === "object" &&
        value.radius !== null &&
        !Array.isArray(value.radius) &&
        typeof value.radius.o_id === "string" &&
        (value.radius.prop === "x" ||
          value.radius.prop === "y" ||
          value.radius.prop === "radius" ||
          value.radius.prop === "start_angle" ||
          value.radius.prop === "end_angle" ||
          value.radius.prop === "radmin")) ||
        (typeof value.radius === "number" && Number.isFinite(value.radius)) ||
        typeof value.radius === "string") &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "arc_radius" &&
      typeof value.a_id === "string" &&
      ((typeof value.radius === "object" &&
        value.radius !== null &&
        !Array.isArray(value.radius) &&
        typeof value.radius.o_id === "string" &&
        (value.radius.prop === "x" ||
          value.radius.prop === "y" ||
          value.radius.prop === "radius" ||
          value.radius.prop === "start_angle" ||
          value.radius.prop === "end_angle" ||
          value.radius.prop === "radmin")) ||
        (typeof value.radius === "number" && Number.isFinite(value.radius)) ||
        typeof value.radius === "string") &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "circle_diameter" &&
      typeof value.c_id === "string" &&
      ((typeof value.diameter === "object" &&
        value.diameter !== null &&
        !Array.isArray(value.diameter) &&
        typeof value.diameter.o_id === "string" &&
        (value.diameter.prop === "x" ||
          value.diameter.prop === "y" ||
          value.diameter.prop === "radius" ||
          value.diameter.prop === "start_angle" ||
          value.diameter.prop === "end_angle" ||
          value.diameter.prop === "radmin")) ||
        (typeof value.diameter === "number" &&
          Number.isFinite(value.diameter)) ||
        typeof value.diameter === "string") &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "arc_diameter" &&
      typeof value.a_id === "string" &&
      ((typeof value.diameter === "object" &&
        value.diameter !== null &&
        !Array.isArray(value.diameter) &&
        typeof value.diameter.o_id === "string" &&
        (value.diameter.prop === "x" ||
          value.diameter.prop === "y" ||
          value.diameter.prop === "radius" ||
          value.diameter.prop === "start_angle" ||
          value.diameter.prop === "end_angle" ||
          value.diameter.prop === "radmin")) ||
        (typeof value.diameter === "number" &&
          Number.isFinite(value.diameter)) ||
        typeof value.diameter === "string") &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "equal_length" &&
      typeof value.l1_id === "string" &&
      typeof value.l2_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "equal_radius_cc" &&
      typeof value.c1_id === "string" &&
      typeof value.c2_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "equal_radii_ee" &&
      typeof value.e1_id === "string" &&
      typeof value.e2_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "equal_radii_ahah" &&
      typeof value.a1_id === "string" &&
      typeof value.a2_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "equal_radius_ca" &&
      typeof value.c1_id === "string" &&
      typeof value.a2_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "equal_radius_aa" &&
      typeof value.a1_id === "string" &&
      typeof value.a2_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "equal_focus" &&
      typeof value.a1_id === "string" &&
      typeof value.a2_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "p2p_symmetric_ppl" &&
      typeof value.p1_id === "string" &&
      typeof value.p2_id === "string" &&
      typeof value.l_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "p2p_symmetric_ppp" &&
      typeof value.p1_id === "string" &&
      typeof value.p2_id === "string" &&
      typeof value.p_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "snells_law" &&
      typeof value.ray1_id === "string" &&
      typeof value.ray2_id === "string" &&
      typeof value.boundary_id === "string" &&
      typeof value.p_id === "string" &&
      ((typeof value.n1 === "object" &&
        value.n1 !== null &&
        !Array.isArray(value.n1) &&
        typeof value.n1.o_id === "string" &&
        (value.n1.prop === "x" ||
          value.n1.prop === "y" ||
          value.n1.prop === "radius" ||
          value.n1.prop === "start_angle" ||
          value.n1.prop === "end_angle" ||
          value.n1.prop === "radmin")) ||
        (typeof value.n1 === "number" && Number.isFinite(value.n1)) ||
        typeof value.n1 === "string") &&
      ((typeof value.n2 === "object" &&
        value.n2 !== null &&
        !Array.isArray(value.n2) &&
        typeof value.n2.o_id === "string" &&
        (value.n2.prop === "x" ||
          value.n2.prop === "y" ||
          value.n2.prop === "radius" ||
          value.n2.prop === "start_angle" ||
          value.n2.prop === "end_angle" ||
          value.n2.prop === "radmin")) ||
        (typeof value.n2 === "number" && Number.isFinite(value.n2)) ||
        typeof value.n2 === "string") &&
      typeof value.flipn1 === "boolean" &&
      typeof value.flipn2 === "boolean" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "c2cdistance" &&
      typeof value.c1_id === "string" &&
      typeof value.c2_id === "string" &&
      ((typeof value.dist === "object" &&
        value.dist !== null &&
        !Array.isArray(value.dist) &&
        typeof value.dist.o_id === "string" &&
        (value.dist.prop === "x" ||
          value.dist.prop === "y" ||
          value.dist.prop === "radius" ||
          value.dist.prop === "start_angle" ||
          value.dist.prop === "end_angle" ||
          value.dist.prop === "radmin")) ||
        (typeof value.dist === "number" && Number.isFinite(value.dist)) ||
        typeof value.dist === "string") &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "c2ldistance" &&
      typeof value.c_id === "string" &&
      typeof value.l_id === "string" &&
      ((typeof value.dist === "object" &&
        value.dist !== null &&
        !Array.isArray(value.dist) &&
        typeof value.dist.o_id === "string" &&
        (value.dist.prop === "x" ||
          value.dist.prop === "y" ||
          value.dist.prop === "radius" ||
          value.dist.prop === "start_angle" ||
          value.dist.prop === "end_angle" ||
          value.dist.prop === "radmin")) ||
        (typeof value.dist === "number" && Number.isFinite(value.dist)) ||
        typeof value.dist === "string") &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "internal_alignment_point2ellipse" &&
      typeof value.e_id === "string" &&
      typeof value.p1_id === "string" &&
      (value.alignmentType === 0 ||
        value.alignmentType === 1 ||
        value.alignmentType === 2 ||
        value.alignmentType === 3 ||
        value.alignmentType === 4 ||
        value.alignmentType === 5 ||
        value.alignmentType === 6 ||
        value.alignmentType === 7 ||
        value.alignmentType === 8 ||
        value.alignmentType === 9 ||
        value.alignmentType === 10 ||
        value.alignmentType === 11 ||
        value.alignmentType === 12 ||
        value.alignmentType === 13 ||
        value.alignmentType === 14 ||
        value.alignmentType === 15 ||
        value.alignmentType === 16 ||
        value.alignmentType === 17) &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "internal_alignment_ellipse_major_diameter" &&
      typeof value.e_id === "string" &&
      typeof value.p1_id === "string" &&
      typeof value.p2_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "internal_alignment_ellipse_minor_diameter" &&
      typeof value.e_id === "string" &&
      typeof value.p1_id === "string" &&
      typeof value.p2_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "internal_alignment_ellipse_focus1" &&
      typeof value.e_id === "string" &&
      typeof value.p1_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "internal_alignment_ellipse_focus2" &&
      typeof value.e_id === "string" &&
      typeof value.p1_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "internal_alignment_point2hyperbola" &&
      typeof value.e_id === "string" &&
      typeof value.p1_id === "string" &&
      (value.alignmentType === 0 ||
        value.alignmentType === 1 ||
        value.alignmentType === 2 ||
        value.alignmentType === 3 ||
        value.alignmentType === 4 ||
        value.alignmentType === 5 ||
        value.alignmentType === 6 ||
        value.alignmentType === 7 ||
        value.alignmentType === 8 ||
        value.alignmentType === 9 ||
        value.alignmentType === 10 ||
        value.alignmentType === 11 ||
        value.alignmentType === 12 ||
        value.alignmentType === 13 ||
        value.alignmentType === 14 ||
        value.alignmentType === 15 ||
        value.alignmentType === 16 ||
        value.alignmentType === 17) &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "internal_alignment_hyperbola_major_diameter" &&
      typeof value.e_id === "string" &&
      typeof value.p1_id === "string" &&
      typeof value.p2_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "internal_alignment_hyperbola_minor_diameter" &&
      typeof value.e_id === "string" &&
      typeof value.p1_id === "string" &&
      typeof value.p2_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "internal_alignment_hyperbola_focus" &&
      typeof value.e_id === "string" &&
      typeof value.p1_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "internal_alignment_parabola_focus" &&
      typeof value.e_id === "string" &&
      typeof value.p1_id === "string" &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "internal_alignment_bspline_control_point" &&
      typeof value.b_id === "string" &&
      typeof value.c_id === "string" &&
      typeof value.poleindex === "number" &&
      Number.isFinite(value.poleindex) &&
      (value.tag !== undefined
        ? typeof value.tag === "number" && Number.isFinite(value.tag)
        : true) &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true)) ||
    (typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === "string" &&
      value.type === "internal_alignment_knot_point" &&
      typeof value.b_id === "string" &&
      typeof value.p_id === "string" &&
      typeof value.knotindex === "number" &&
      Number.isFinite(value.knotindex) &&
      (value.driving !== undefined
        ? typeof value.driving === "boolean"
        : true) &&
      (value.temporary !== undefined
        ? typeof value.temporary === "boolean"
        : true) &&
      (value.scale !== undefined
        ? typeof value.scale === "number" && Number.isFinite(value.scale)
        : true))
  );
};
